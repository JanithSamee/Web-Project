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

export default function Login() {
	return (
		<Container size={420} my={40}>
			<Title ta="center" className={classes.title}>
				Welcome back!
			</Title>

			<Text className={classes.subtitle}>
				Do not have an account yet?{" "}
				<Link href="/student/register">
					<Anchor>Create account</Anchor>
				</Link>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<TextInput
					label="Email"
					placeholder="you@mantine.dev"
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
				<Group justify="space-between" mt="lg">
					<Checkbox label="Remember me" />
					<Anchor component="button" size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Button fullWidth mt="xl" radius="md">
					Sign in
				</Button>
			</Paper>
		</Container>
	);
}
