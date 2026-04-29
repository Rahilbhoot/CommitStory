const express = require('express');
const router = express.Router();
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/fetch-commits', async (req, res) => {
    const { repoUrl } = req.body;

    try {
        if (!process.env.GITHUB_TOKEN) {
            return res.status(500).json({ error: "GITHUB_TOKEN is not set in .env" });
        }
        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({ error: "GROQ_API_KEY is not set in .env" });
        }

        const path = repoUrl.split('github.com/')[1];
        const urlParts = path ? path.split('/') : [];
        const owner = urlParts[0];
        const repo = urlParts[1]?.replace('.git', '');

        console.log("Token Loaded:", process.env.GITHUB_TOKEN ? "YES" : "NO");

        if (!owner || !repo) {
            return res.status(400).json({ error: "Invalid URL. Use: https://github.com/user/repo" });
        }
        console.log("Using Token:", process.env.GITHUB_TOKEN.substring(0, 7) + "...");
        console.log("Fetching commits for:", owner, "/", repo);

        const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/commits`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    "Accept": "application/vnd.github.v3+json"
                }
            }
        );

        const commitMessage = response.data.map(commitObj => commitObj.commit.message);

        const prompt = `
            You are a master storyteller for developers. 
             I will give you a list of commit messages. 
             Write a compelling 3-paragraph narrative about the project's evolution.
            Talk about the bugs fought, the features added, and the final victory.
            Commits: ${commitMessage.join(', ')}
        `;

        const result = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.1-8b-instant",
        });

        const story = result.choices[0]?.message?.content || "No story generated.";
        res.json({ messages: commitMessage, story: story });
    } catch (error) {
        console.error("--- ERROR START ---");
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", JSON.stringify(error.response.data));
        } else {
            console.error("Message:", error.message);
        }
        console.error("--- ERROR END ---");

        \        const status = error.response?.status || 500;
        const detail = error.response?.data?.message || error.message;
        res.status(status).json({ error: "Failed to fetch commits", detail });
    }
});
module.exports = router;