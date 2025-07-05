import {
	Card,
	Group,
	Text,
	Title,
	Button,
	List,
	ThemeIcon,
	Divider,
	Box,
} from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import Link from "next/link";

const studentData = {
	fullName: "John Doe",
	username: "johndoe123",
	dob: "2000-01-01",
	courses: [
		{ name: "Mathematics", url: "mathematics" },
		{ name: "Physics", url: "physics" },
		{ name: "Chemistry", url: "chemistry" },
	],
};

export default function Profile() {
	return (
		<Box maw={500} mx="auto" my={40}>
			<Card shadow="md" padding="xl" radius="md" withBorder>
				<Title order={2} mb="md" align="center">
					Student Profile
				</Title>
				<Divider mb="md" />
				<Group direction="column" spacing={8} mb="lg">
					<Text>
						<Text span fw={500}>
							Full Name:
						</Text>{" "}
						{studentData.fullName}
					</Text>
					<Text>
						<Text span fw={500}>
							Username:
						</Text>{" "}
						{studentData.username}
					</Text>
					<Text>
						<Text span fw={500}>
							Date of Birth:
						</Text>{" "}
						{studentData.dob}
					</Text>
				</Group>
				<Divider mb="md" />
				<Title order={4} mb="sm">
					My Courses
				</Title>
				<List
					spacing="sm"
					size="md"
					icon={
						<ThemeIcon color="blue" size={24} radius="xl">
							<IconBook size={16} />
						</ThemeIcon>
					}>
					{studentData.courses.map((course) => (
						<List.Item key={course.url}>
							<Group position="apart" noWrap>
								<Text>{course.name}</Text>
								<Link
									href={`/courses/r/${course.url}`}
									passHref
									legacyBehavior>
									<Button
										component="a"
										size="xs"
										variant="light"
										color="blue">
										Go to Course
									</Button>
								</Link>
							</Group>
						</List.Item>
					))}
				</List>
			</Card>
		</Box>
	);
}
