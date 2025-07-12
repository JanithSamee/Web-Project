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
import { StudentLogin } from "@/util/api/student.api";
import { useState } from "react";
import useAuth from "@/util/context/AuthContext";
import { useRouter } from "next/router";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();
	const { setUser } = useAuth();

	async function submit() {
		setIsLoading(true);
		const res = await StudentLogin(username, password);
		setIsLoading(false);

		setUser({ username, token: res.token, role: "student" });

		router.push("/student/profile");
	}

	return (
		<Container size={420} my={40}>
			<Title ta="center" className={classes.title}>
				Welcome back!
			</Title>

			<Text className={classes.subtitle}>
				Do not have an account yet?{" "}
				<Link href="/student/register">Create account</Link>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<TextInput
					label="Username"
					placeholder="Username"
					required
					radius="md"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					required
					mt="md"
					radius="md"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<Group justify="space-between" mt="lg">
					<Checkbox label="Remember me" />
					<Anchor component="button" size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Button
					fullWidth
					mt="xl"
					radius="md"
					onClick={submit}
					loading={isLoading}>
					Sign in
				</Button>
			</Paper>
		</Container>
	);
}
