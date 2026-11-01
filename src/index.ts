import { Elysia } from "elysia";

new Elysia()
	.get("/", () => "Hello Elysia")
	.listen(3000, ({ hostname, port }) => {
		console.log(`Elysia is running at ${hostname}:${port}`);
	});
