graph TD
    A[Start: Initialize State] -->|Settings| B[Screen Monitoring]
    A -->|Settings| C[Audio Processing]
    B -->|Screen Text| D[Response Generation]
    C -->|Transcript| D
    D -->|Response| E[Integration]
    D -->|Response| F[Stealth Management]
    E -->|Updates| G[Output: Deliver Response]
    F -->|Config| G
    G -->|Loop| B
    G -->|Loop| C
    G --> H[End: Stop App]
