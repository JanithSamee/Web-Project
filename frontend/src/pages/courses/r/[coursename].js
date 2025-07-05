import React from "react";
import {
	Container,
	Title,
	Text,
	Card,
	Group,
	ThemeIcon,
	List,
	Divider,
} from "@mantine/core";
import {
	IconBook,
	IconListNumbers,
	IconCode,
	IconPalette,
	IconDeviceDesktop,
} from "@tabler/icons-react";

// Example course data
const course = {
	title: "Introduction to Web Development",
	subtitle: "Build a strong foundation in modern web technologies",
	description: `This course is designed to introduce you to the fundamentals of web development. You will learn about HTML, CSS, JavaScript, and how these technologies work together to create interactive and responsive web applications. By the end of this course, you'll have the skills to build your own basic websites and understand the core concepts needed for further study in web development.`,
	modules: [
		{
			title: "Intro",
			description: `Welcome to the Introduction module of this course. In this section, we will lay the foundation for your learning journey. The purpose of this module is to provide you with a comprehensive overview of the subject matter, its significance, and how it fits into the broader context of your studies or professional development. Throughout this introduction, you will gain insights into the key concepts, objectives, and outcomes that you can expect by the end of the course.

			The module begins by exploring the historical background and evolution of the topic, highlighting its relevance in today's world. We will discuss the core principles and theories that underpin the subject, ensuring that you have a solid understanding of the basics before moving on to more advanced material. Additionally, this section will introduce you to the main challenges and opportunities associated with the field, encouraging you to think critically about the issues at hand.

			As you progress through the introduction, you will encounter real-world examples and case studies that illustrate the practical applications of the concepts being discussed. These examples are designed to help you connect theory to practice, making the material more relatable and easier to grasp. You will also find reflective questions and activities that encourage you to engage actively with the content, fostering a deeper level of understanding.

			By the end of this module, you should feel confident in your ability to articulate the fundamental ideas and importance of the subject. You will be well-prepared to tackle the subsequent modules, which will delve deeper into specific topics and skills. Remember, the introduction is not just a starting point—it is a crucial step in building a strong foundation for your learning. Take your time to absorb the material, ask questions, and seek clarification whenever necessary. We are excited to have you on this journey and look forward to supporting you every step of the way.`,
		},
		{
			title: "HTML Basics",
			description: `Learn the structure of web pages using HTML. This module covers elements, tags, attributes, and how to build semantic layouts.`,
		},
		{
			title: "CSS Fundamentals",
			description: `Discover how to style web pages with CSS. You'll explore selectors, properties, the box model, and responsive design techniques.`,
		},
		{
			title: "JavaScript Essentials",
			description: `Get started with JavaScript to add interactivity to your websites. This module introduces variables, functions, events, and basic DOM manipulation.`,
		},
	],
};

const moduleIcons = [
	<IconBook size={28} />,
	<IconListNumbers size={28} />,
	<IconPalette size={28} />,
	<IconCode size={28} />,
];

const CoursePage = () => {
	return (
		<Container size="md" py="xl">
			<Card shadow="md" radius="lg" p="xl" withBorder>
				<Title order={1} mb={8} style={{ fontWeight: 800 }}>
					{course.title}
				</Title>
				<Text
					size="lg"
					color="dimmed"
					mb={12}
					style={{ fontStyle: "italic" }}>
					{course.subtitle}
				</Text>
				<Text size="md" mb="lg" style={{ maxWidth: 700 }}>
					{course.description}
				</Text>
				<Divider my="md" />
				<Title order={2} mb="md" style={{ fontWeight: 700 }}>
					Modules
				</Title>
				<List
					spacing="lg"
					size="md"
					center
					icon={
						<ThemeIcon color="blue" size={32} radius="xl">
							<IconDeviceDesktop size={20} />
						</ThemeIcon>
					}>
					{course.modules.map((module, idx) => (
						<List.Item
							key={idx}
							icon={
								<ThemeIcon
									color="indigo"
									size={36}
									radius="xl"
									variant="light">
									{moduleIcons[idx % moduleIcons.length]}
								</ThemeIcon>
							}>
							<Card
								shadow="sm"
								radius="md"
								p="md"
								withBorder
								mb="md">
								<Group align="center" mb={6}>
									<Title
										order={3}
										style={{ fontWeight: 600 }}>
										{module.title}
									</Title>
								</Group>
								<Text
									size="sm"
									color="gray"
									style={{
										textAlign: "justify",
										lineHeight: 1.7,
									}}>
									{module.description}
								</Text>
							</Card>
						</List.Item>
					))}
				</List>
			</Card>
		</Container>
	);
};

export default CoursePage;
