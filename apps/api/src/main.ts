import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "nestjs-prisma";
import { Logger } from "@nestjs/common";

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api/v1");

    // utilities
    const logger = new Logger(bootstrap.name);

    // Prisma interferes with NestJS `enableShutdownHooks`
    // see https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);

    // start up our application
    // const port = config.get("HOST_PORT") || 4000;
    await app.listen(PORT, () => {
        logger.log(`App listening on port ${PORT}`);
    });
}
bootstrap();
