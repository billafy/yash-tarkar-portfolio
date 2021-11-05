import React from "react";
import "../portfolio-css/projects.scss";
import { projects } from "../static/data";

const Projects = () => {
	return (
		<section className="projects">
			<h1>Projects</h1>
			<ul>
				{projects.map((project, index) => {
					return (
						<li key={project.id} className="fade-in">
							<div
								className="project-image"
								style={{ background: `url(${project.image})` }}
							>
								<p>
									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
									>
										{project.text}
									</a>
								</p>
							</div>
							<div className="project-info">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<a
									href={project.source}
									target="_blank"
									rel="noreferrer"
								>
									View Source
								</a>
							</div>
						</li>
					);
				})}
			</ul>
			<a
				className="see-more"
				href="https://github.com/billafy"
				target="_blank"
				rel="noreferrer"
			>
				See more on GitHub{" "}
				<img
					src="https://img.icons8.com/fluent/50/000000/github.png"
					alt="GitHub"
				/>
			</a>
		</section>
	);
};

export default Projects;