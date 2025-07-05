import React from "react";
import {
	Container,
	Paper,
	Title,
	Text,
	Button,
	Stack,
	Image,
	Grid,
} from "@mantine/core";

export default function CoursePage() {
	return (
		<div
			style={{
				minHeight: "100vh",
				width: "100vw",
				background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Container size="lg" px={0}>
				<Paper
					p={0}
					radius={20}
					shadow="xl"
					withBorder
					style={{
						overflow: "hidden",
						display: "flex",
						minHeight: 500,
					}}>
					<Grid gutter={0} style={{ flex: 1 }}>
						<Grid.Col
							span={6}
							style={{
								background: "#fff",
								display: "flex",
								alignItems: "center",
							}}>
							<Stack
								spacing="md"
								p={48}
								style={{ width: "100%" }}>
								<Title order={1} size="2.5rem" c="dark">
									Modern JavaScript Mastery
								</Title>
								<Title
									order={2}
									size="1.25rem"
									c="gray"
									fw={400}>
									Become a JavaScript Pro in 30 Days
								</Title>
								<Text size="lg" c="dimmed">
									Dive deep into modern JavaScript with
									hands-on projects, real-world examples, and
									expert guidance. Perfect for beginners and
									experienced developers looking to level up
									their skills.
								</Text>
								<Button
									size="md"
									radius="md"
									gradient={{
										from: "indigo",
										to: "violet",
										deg: 90,
									}}
									variant="gradient"
									fw={700}
									mt="md"
									style={{ width: 180 }}>
									Enroll Now
								</Button>
							</Stack>
						</Grid.Col>
						<Grid.Col
							span={6}
							style={{
								display: "flex",
								alignItems: "stretch",
								justifyContent: "center",
								padding: 0,
							}}>
							<div style={{ width: "100%", height: "100%" }}>
								<Image
									src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
									alt="JavaScript Course"
									radius={0}
									style={{
										objectFit: "cover",
										width: "100%",
										height: "100%",
										minHeight: 500,
										borderRadius: 0,
										display: "block",
									}}
								/>
							</div>
						</Grid.Col>
					</Grid>
				</Paper>
			</Container>
		</div>
	);
}
