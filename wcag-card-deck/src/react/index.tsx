import React from "react";

import "./index.css";

export interface WcagCardProps {
	criterion: string;
}

export const WcagCard = ({
	criterion = "1.3.1",
	...props
}: WcagCardProps) => {
	return (
		<article class="wcag-card">
			<header>
				<h1>{criterion}</h1>
				<div>Understandable</div>
				<div>Info and Relationships</div>
				<ul>
					<li>
						<svg>
							<title>foo</title>
						</svg>
					</li>
				</ul>
			</header>
			<div class="wcag-card-content">
				<p>
					Visual information and relationships (like labels, headings,
					or groupings) must also be conveyed in the code using...
				</p>
			</div>
			<footer>
				<p>Footer</p>
			</footer>
		</article>
	);
};
