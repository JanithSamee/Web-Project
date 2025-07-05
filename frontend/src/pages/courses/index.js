import React from "react";
import { Card, Image, Text, Group, SimpleGrid, Button } from "@mantine/core";
import Link from "next/link";

// Sample course data
const courses = [
	{
		id: 1,
		title: "React for Beginners",
		subtitle: "Learn the basics of React.js",
		image: "https://placehold.co/400x200?react",
		courseUrl: "react-for-beginners",
	},
	{
		id: 2,
		title: "Advanced JavaScript",
		subtitle: "Deep dive into JS concepts",
		image: "https://placehold.co/400x200?javascript",
		courseUrl: "advanced-javascript",
	},
	{
		id: 3,
		title: "UI/UX Design",
		subtitle: "Design beautiful interfaces",
		image: "https://placehold.co/400x200?design",
		courseUrl: "ui-ux-design",
	},
	{
		id: 4,
		title: "Python for Data Science",
		subtitle: "Analyze data with Python",
		image: "https://placehold.co/400x200?python",
		courseUrl: "python-for-data-science",
	},
	{
		id: 5,
		title: "Web Development Bootcamp",
		subtitle: "Full-stack web development",
		image: "https://placehold.co/400x200?web",
		courseUrl: "web-development-bootcamp",
	},
	{
		id: 6,
		title: "Machine Learning Basics",
		subtitle: "Introduction to ML concepts",
		image: "https://placehold.co/400x200?machinelearning",
		courseUrl: "machine-learning-basics",
	},
];

export default function CoursesPage() {
	return (
		<SimpleGrid
			cols={3}
			p={16}
			spacing="lg"
			breakpoints={[
				{ maxWidth: 980, cols: 2, spacing: "md" },
				{ maxWidth: 755, cols: 1, spacing: "sm" },
			]}>
			{courses.map((course) => (
				<Card
					key={course.id}
					shadow="sm"
					padding="lg"
					radius="md"
					withBorder>
					<Card.Section>
						<Image
							src={course.image}
							height={160}
							alt={course.title}
						/>
					</Card.Section>
					<Group position="apart" mt="md" mb="xs">
						<Text weight={500}>{course.title}</Text>
					</Group>
					<Text size="sm" color="dimmed">
						{course.subtitle}
					</Text>
					<Link href={"/courses/" + course.courseUrl} passHref>
						<Button variant="light" mt={8} component="a" fullWidth>
							Start Learning
						</Button>
					</Link>
				</Card>
			))}
		</SimpleGrid>
	);
}
