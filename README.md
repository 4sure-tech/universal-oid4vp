---
title: Universal OID4VP
description: Universal OID4VP OpenAPI Specification and Code Generators
hide_table_of_contents: true
---

# Universal OID4VP OpenAPI Specification and Code Generators

Welcome to the **Universal OID4VP API** repository, managed and created by the [Fides Community](https://fides.community). This repository
contains the OpenAPI specification for the Universal **OID4VP API (OpenID for Verifiable Presentation)** and accompanying tools for generating code
based on this specification.

## Overview

The **Universal OID4VP API** provides a structured and comprehensive specification for integrating OpenID for Verifiable Presentations in your
applications, where you do not rely on a single vendor providing the OID4VP Relying Party component. Using
this OpenAPI, developers can generate consistent, reusable, and extensible client/server code in a variety of programming languages, enabling seamless
integration and adherence to open identity standards.

Key highlights of this project include:

- OpenAPI specification defined in `openapi.yaml`.
- Code generators powered by [OpenAPI Generator](https://openapi-generator.tech/), integrated with **Gradle** for automation.
- Support for multiple programming languages during code generation.

## Repository Structure

- `openapi.yaml`: The core OpenAPI specification for Universal OID4VP.
- `build.gradle`: Configuration for Gradle tasks used to generate code using OpenAPI Generator.
- `build/generated`: Auto-generated code for client/server implementations.
- `docs`: Documentation generated from `openapi.yaml`, detailing the available API operations, data structures, and workflows.

## Getting Started

### Prerequisites

To get started, make sure you have the following installed:

- **Java Development Kit (JDK)**: Version 11 or higher.
- **Gradle**: Version 7.x or above.

### Generating Code

Code generation is automated using Gradle tasks defined in the build configuration. You can generate client or server code based on the OpenAPI
specification in `openapi.yaml`.

Run the following command to generate code for a specified language:

```bash
./gradlew generate<LANGUAGE>Client
```

Replace `<LANGUAGE>` with your desired generation target (e.g., `Java`, `Python`, etc.).

Example: To generate a Java client:

```bash
./gradlew generateJavaClient
```

The generated code will be saved in the appropriate directory under `build/generated`.

### Customizing the OpenAPI Specification

The primary source of truth for this repository is the `openapi.yaml` file. You can edit this file to customize the API specification or add new
endpoints. After making changes, re-generate the code to reflect the updated specification in your project.

## How It Works

This project leverages the **OpenAPI Generator** tool, integrated with Gradle plugins, to automatically generate client and server code from a single
source of truth (`openapi.yaml`). Here’s how the process works:

1. **OpenAPI Definition**: The `openapi.yaml` contains the API definition, including all endpoints, paths, parameters, and object schemas.
2. **Code Generation**: Gradle tasks call OpenAPI Generator with the specified language templates to generate the code in the `src/generated/` folder.
3. **Development and Integration**: Use the generated code as a foundation to implement APIs or interact with the Universal OID4VP.

## Contribution

We welcome contributions from the community! If you’d like to contribute to this project:

1. Fork the repository.
2. Implement your changes.
3. Submit a pull request for review.

Be sure to adhere to the contribution guidelines outlined in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## Maintainers

- **Niels Klomp** - [Email](mailto:nklomp@4sure.tech)
- **Eelco Klaver** - [Email](mailto:eelco.klaver@credenco.com)
- **Harmen van der Kooij** - [Email](mailto:harmen@fides.community)

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

Built and maintained by the [Fides Community](https://fides.community).  
We appreciate all contributors and users who help improve and grow this project!

---

**Fides Community**  
[Learn more](https://fides.community)
