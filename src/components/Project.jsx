import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StarIcon from '@mui/icons-material/Star';
import '../assets/scss/project.scss'; // Bu dosyayı oluşturmayı unutma

const Project = () => {
    const [repos, setRepos] = useState([]);
    const username = "selinoser";

    useEffect(() => {
        const cachedData = localStorage.getItem("github_repos");
        const cacheTime = localStorage.getItem("github_repos_time");
        const now = new Date().getTime();

        if (cachedData && cacheTime && now - cacheTime < 86400000) {
            setRepos(JSON.parse(cachedData));
        } else {
            fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
                .then(res => res.json())
                .then(data => {
                    const filteredRepos = data
                        .filter(repo => !repo.fork) 
                        .slice(0, 6);

                    setRepos(filteredRepos);
                    localStorage.setItem("github_repos", JSON.stringify(filteredRepos));
                    localStorage.setItem("github_repos_time", now.toString());
                })
                .catch(err => console.error("GitHub API Hatası:", err));
        }
    }, []);

    return (
        <section id="projects">
            <div className="projects-container">
                 <div className="section-header">
                    <h2 className="title">GitHub Projects</h2>
                    <div className="underline"></div>
                </div>

                <div className="projects-grid">
                    {repos.map((repo) => (


                        <div key={repo.id} className="modern-card">
                            <div className="card-top">
                                <div className="card-icon">
                                    <FolderOpenIcon fontSize="inherit" />
                                </div>
                                <div className="external-links">
                                    <a href={repo.html_url} target="_blank"><GitHubIcon fontSize="inherit" /></a>
                                    {repo.homepage && <a href={repo.homepage} target="_blank"><LaunchIcon fontSize="inherit" /></a>}
                                </div>
                            </div>

                            <h3 className="project-title">{repo.name}</h3>
                            <p className="project-desc">{repo.description}</p>

                            <div className="card-footer">
                                <span className="tech-tag">{repo.language}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;