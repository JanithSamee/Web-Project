import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar";

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
	return (
		<MantineProvider theme={theme}>
			<Navbar></Navbar>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
