import React, { useState } from "react";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import {
	Container,
	Title,
	Button,
	Group,
	Table,
	Modal,
	TextInput,
	Textarea,
	ActionIcon,
	Stack,
	Box,
	Divider,
	Badge,
	ScrollArea,
} from "@mantine/core";

// Sample Data
const initialCourses = [
	{
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
	},
];

const initialStudents = [
	{ name: "Alice Johnson", email: "alice@example.com" },
	{ name: "Bob Smith", email: "bob@example.com" },
];

const initialAdmins = [
	{ name: "Admin One", email: "admin1@example.com" },
	{ name: "Admin Two", email: "admin2@example.com" },
];

// Course Form Component
function CourseForm({ initial, onSubmit, onCancel }) {
	const [title, setTitle] = useState(initial?.title || "");
	const [subtitle, setSubtitle] = useState(initial?.subtitle || "");
	const [description, setDescription] = useState(initial?.description || "");
	const [modules, setModules] = useState(initial?.modules || []);

	const [modTitle, setModTitle] = useState("");
	const [modDesc, setModDesc] = useState("");

	const addModule = () => {
		if (modTitle && modDesc) {
			setModules([...modules, { title: modTitle, description: modDesc }]);
			setModTitle("");
			setModDesc("");
		}
	};

	const removeModule = (idx) => {
		setModules(modules.filter((_, i) => i !== idx));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title || !subtitle || !description) return;
		onSubmit({ title, subtitle, description, modules });
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack>
				<TextInput
					label="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<TextInput
					label="Subtitle"
					value={subtitle}
					onChange={(e) => setSubtitle(e.target.value)}
					required
				/>
				<Textarea
					label="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					minRows={3}
					required
				/>
				<Divider label="Modules" />
				<Group>
					<TextInput
						placeholder="Module Title"
						value={modTitle}
						onChange={(e) => setModTitle(e.target.value)}
					/>
					<TextInput
						placeholder="Module Description"
						value={modDesc}
						onChange={(e) => setModDesc(e.target.value)}
					/>
					<Button onClick={addModule} variant="light">
						Add Module
					</Button>
				</Group>
				<Stack spacing="xs">
					{modules.map((mod, idx) => (
						<Group key={idx} position="apart">
							<Box>
								<b>{mod.title}</b>: {mod.description}
							</Box>
							<ActionIcon
								color="red"
								onClick={() => removeModule(idx)}>
								<IconTrash size={16} />
							</ActionIcon>
						</Group>
					))}
				</Stack>
				<Group position="right" mt="md">
					<Button variant="default" onClick={onCancel}>
						Cancel
					</Button>
					<Button type="submit">
						{initial ? "Update" : "Add"} Course
					</Button>
				</Group>
			</Stack>
		</form>
	);
}

// Admin Form Component
function AdminForm({ onSubmit, onCancel }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email) return;
		onSubmit({ name, email });
	};

	return (
		<form onSubmit={handleSubmit}>
			<Stack>
				<TextInput
					label="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<TextInput
					label="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Group position="right" mt="md">
					<Button variant="default" onClick={onCancel}>
						Cancel
					</Button>
					<Button type="submit">Add Admin</Button>
				</Group>
			</Stack>
		</form>
	);
}

export default function AdminDashboard() {
	// Courses
	const [courses, setCourses] = useState(initialCourses);
	const [courseModal, setCourseModal] = useState(false);
	const [editCourseIdx, setEditCourseIdx] = useState(null);

	// Admins
	const [admins, setAdmins] = useState(initialAdmins);
	const [adminModal, setAdminModal] = useState(false);

	// Students
	const [students] = useState(initialStudents);

	// Course Handlers
	const handleAddCourse = (course) => {
		setCourses([...courses, course]);
		setCourseModal(false);
	};

	const handleEditCourse = (course) => {
		setCourses(
			courses.map((c, idx) => (idx === editCourseIdx ? course : c))
		);
		setEditCourseIdx(null);
		setCourseModal(false);
	};

	const handleDeleteCourse = (idx) => {
		setCourses(courses.filter((_, i) => i !== idx));
	};

	// Admin Handlers
	const handleAddAdmin = (admin) => {
		setAdmins([...admins, admin]);
		setAdminModal(false);
	};

	const handleDeleteAdmin = (idx) => {
		setAdmins(admins.filter((_, i) => i !== idx));
	};

	return (
		<Container size="xl" py="lg">
			<Title order={2} mb="md">
				Admin Dashboard
			</Title>

			{/* Courses Section */}
			<Group position="apart" mb="xs" mt="lg">
				<Title order={4}>Courses</Title>
				<Button
					leftIcon={<IconPlus />}
					onClick={() => {
						setEditCourseIdx(null);
						setCourseModal(true);
					}}>
					Add Course
				</Button>
			</Group>
			<ScrollArea>
				<Table striped highlightOnHover>
					<thead>
						<tr>
							<th>Title</th>
							<th>Subtitle</th>
							<th>Modules</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course, idx) => (
							<tr key={idx}>
								<td>{course.title}</td>
								<td>{course.subtitle}</td>
								<td>
									<Group spacing="xs">
										{course.modules.map((mod, mIdx) => (
											<Badge key={mIdx}>
												{mod.title}
											</Badge>
										))}
									</Group>
								</td>
								<td>
									<Group spacing={4}>
										<ActionIcon
											color="blue"
											onClick={() => {
												setEditCourseIdx(idx);
												setCourseModal(true);
											}}>
											<IconEdit size={18} />
										</ActionIcon>
										<ActionIcon
											color="red"
											onClick={() =>
												handleDeleteCourse(idx)
											}>
											<IconTrash size={18} />
										</ActionIcon>
									</Group>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ScrollArea>
			<Modal
				opened={courseModal}
				onClose={() => {
					setCourseModal(false);
					setEditCourseIdx(null);
				}}
				title={editCourseIdx !== null ? "Edit Course" : "Add Course"}
				fullScreen
				padding="xl">
				<CourseForm
					initial={
						editCourseIdx !== null ? courses[editCourseIdx] : null
					}
					onSubmit={
						editCourseIdx !== null
							? handleEditCourse
							: handleAddCourse
					}
					onCancel={() => {
						setCourseModal(false);
						setEditCourseIdx(null);
					}}
				/>
			</Modal>

			<Divider my="lg" />

			{/* Students Section */}
			<Title order={4} mb="xs">
				Registered Students
			</Title>
			<ScrollArea>
				<Table striped>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student, idx) => (
							<tr key={idx}>
								<td>{student.name}</td>
								<td>{student.email}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ScrollArea>

			<Divider my="lg" />

			{/* Admins Section */}
			<Group position="apart" mb="xs" mt="lg">
				<Title order={4}>Admins</Title>
				<Button
					leftIcon={<IconPlus />}
					onClick={() => setAdminModal(true)}>
					Add Admin
				</Button>
			</Group>
			<ScrollArea>
				<Table striped>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{admins.map((admin, idx) => (
							<tr key={idx}>
								<td>{admin.name}</td>
								<td>{admin.email}</td>
								<td>
									<ActionIcon
										color="red"
										onClick={() => handleDeleteAdmin(idx)}>
										<IconTrash size={18} />
									</ActionIcon>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</ScrollArea>
			<Modal
				opened={adminModal}
				onClose={() => setAdminModal(false)}
				title="Add Admin">
				<AdminForm
					onSubmit={handleAddAdmin}
					onCancel={() => setAdminModal(false)}
				/>
			</Modal>
		</Container>
	);
}
