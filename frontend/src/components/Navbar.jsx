import { useState } from "react";
import { Avatar, Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/HeaderSimple.module.css";
import Link from "next/link";

const links = [
	{ link: "/student/login", label: "Login" },
	{ link: "/student/register", label: "Register" },
	{ link: "/courses", label: "Courses" },
	{ link: "/about", label: "About" },
];

export default function Navbar() {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<Link key={link.label} href={link.link} className={classes.link}>
			{link.label}
		</Link>
	));

	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				{/* Company Logo and Name */}
				<Link
					href="/"
					className={classes.logoContainer}
					style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
					}}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
						alt="Company Logo"
						style={{
							width: 40,
							height: 40,
							borderRadius: "50%",
							marginRight: 10,
						}}
					/>
					<span
						style={{
							fontWeight: 700,
							fontSize: 20,
							color: "#222",
						}}>
						LMS
					</span>
				</Link>

				<Group gap={5} visibleFrom="xs">
					{items}
				</Group>
				{/* Profile Avatar */}
				<Link href="/student/profile" style={{ marginLeft: 16 }}>
					<Avatar
						src="https://ui-avatars.com/api/?name=User"
						alt="Profile"
						radius="xl"
						size={36}
						style={{ cursor: "pointer" }}
					/>
				</Link>
				<Burger
					opened={opened}
					onClick={toggle}
					hiddenFrom="xs"
					size="sm"
				/>
			</Container>
		</header>
	);
}
