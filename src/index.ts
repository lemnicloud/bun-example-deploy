import { Elysia } from "elysia";

new Elysia()
	.get("/", () => `Hello from angelcloud cell: ${Bun.env.ANGEL_CELL_ID ?? ""}`)
	.listen(3000, ({ hostname, port }) => {
		console.log(`Elysia is running at ${hostname}:${port}`);
	});
