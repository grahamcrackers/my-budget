import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PrismaService } from "nestjs-prisma";
import { AppModule } from "./app.module";

const PORT = 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // TODO: global validations
    app.setGlobalPrefix("api/v1");

    // utilities
    // TODO: config service
    const logger = new Logger(bootstrap.name);

    // Prisma interferes with NestJS `enableShutdownHooks`
    // see https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);

    // OpenAPI/Swagger Docs
    const openApiConfig = new DocumentBuilder()
        .setTitle("My Budget API")
        .setDescription("My Budget API description")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, openApiConfig);
    SwaggerModule.setup("api", app, document);

    // start up our application
    // const port = config.get("HOST_PORT") || 4000;
    await app.listen(PORT, () => {
        logger.log(`App listening on port ${PORT}`);
    });
}
bootstrap();
