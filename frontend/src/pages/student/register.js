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

export default function Register() {
	return (
		<Container size={420} my={40}>
			<Title ta="center" className={classes.title}>
				Create Your Account!
			</Title>

			<Text className={classes.subtitle}>
				Already Have an Account?{" "}
				<Link href="/student/login">
					<Anchor>Login Here</Anchor>
				</Link>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<TextInput
					label="Username"
					placeholder="yourusername"
					required
					radius="md"
					mt={0}
				/>
				<TextInput
					label="Full Name"
					placeholder="Your full name"
					required
					radius="md"
					mt="md"
				/>
				<TextInput
					label="Date of Birth"
					placeholder="YYYY-MM-DD"
					type="date"
					required
					radius="md"
					mt="md"
				/>
				<TextInput
					label="Email"
					placeholder="you@mantine.dev"
					required
					radius="md"
					mt="md"
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					required
					mt="md"
					radius="md"
				/>
				<PasswordInput
					label="Confirm Password"
					placeholder="Re-enter your password"
					required
					mt="md"
					radius="md"
				/>

				<Button fullWidth mt="xl" radius="md">
					Register
				</Button>
			</Paper>
		</Container>
	);
}
