import {
	Anchor,
	Button,
	Checkbox,
	Container,
	Group,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import classes from "@/styles/common.module.css";
import Link from "next/link";

export default function AdminLogin() {
	return (
		<Container size={420} my={40}>
			<Title ta="center" className={classes.title}>
				Admin Login
			</Title>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<TextInput
					label="Admin Email"
					placeholder="admin@yourdomain.com"
					required
					radius="md"
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					required
					mt="md"
					radius="md"
				/>

				<Link href={"/admin/dashboard"}>
					<Button fullWidth mt="xl" radius="md">
						Sign in
					</Button>
				</Link>
			</Paper>
		</Container>
	);
}
