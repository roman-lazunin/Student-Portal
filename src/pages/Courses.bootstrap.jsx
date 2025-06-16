// Bootstrap CDN for vite/react: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css
import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const courses = [
	{
		id: 1,
		name: "Matematik",
		description: "Grundläggande matematik för gymnasiet.",
	},
	{
		id: 2,
		name: "Programmering",
		description: "Introduktion till programmering och problemlösning.",
	},
	{
		id: 3,
		name: "Historia",
		description: "Världshistoria från antiken till nutid.",
	},
];

export default function Courses() {
	return (
		<div className="container mt-4">
			<h1 className="mb-4">Kurser</h1>
			<div className="row">
				{courses.map((course) => (
					<div className="col-md-4 mb-4" key={course.id}>
						<div className="card h-100">
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">{course.name}</h5>
								<p className="card-text">{course.description}</p>
								<Link
									to={`/courses/${course.id}`}
									className="btn btn-primary mt-auto"
									style={{ color: "white", textDecoration: "none" }}
								>
									Läs mer
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
