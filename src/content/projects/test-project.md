---
title: "nMath"
description: "A lightweight, header-based C++ math library ."
tags: ["c++"]
github: "https://github.com/mayankbairagi0312/nNewton"
order: 1
---
## Features
- **Vector Types**: `nVector2`, `nVector3`, `nVector4`
- **Matrix**: `nMatrix4` (4x4 transformation matrices)
- **Quaternion**: `nQuaternion` (rotation representation)
- **constexpr** support for compile-time calculations (C++20)


## Files
```
nMath/
├── src/
│   ├── nMath.hpp      # Main header with declarations
│   ├── nMath.inl      # Inline implementations
│   └── nMath.cpp      # Function implementations
└── example.cpp        # Usage examples
```

## Requirements
- **C++20** or later
- Compiler: GCC 10+, Clang 12+, MSVC 2022+

## Quick Start
### Basic Usage

```cpp
#include "nMath.hpp"
using namespace nMath;

// Vectors
nVector3 position(1.0f, 2.0f, 3.0f);
nVector3 velocity(0.5f, 0.0f, -1.0f);
nVector3 result = position + velocity * 2.0f;

// Dot and cross products
float dot = DotProduct(position,velocity);
nVector3 normal = Normalized(CrossProduct(position,velocity));

// Matrices
nMatrix4 translation = Translate(nVector3(5.0f, 0.0f, 0.0f));
nMatrix4 rotation = Rotate(45.0f, nVector3(0.0f, 1.0f, 0.0f));
nMatrix4 transform = translation * rotation;

// Quaternions
nQuaternion q = from_AxisAngle(nVector3(0, 1, 0), 3.14159f / 4);
nVector3 rotated = Vec_Rotate(q,nVector3(1, 0, 0));
```

### Compilation

**GCC/MinGW:**

```bash
g++ -std=c++20 example.cpp nMath.cpp -o example
```

**MSVC:**

```bash
cl /std:c++20 example.cpp nMath.cpp
```

**CMake:**

```cmake
add_executable(example example.cpp nMath.cpp)
target_compile_features(example PRIVATE cxx_std_20)
```

## Overview
### nVector2 / nVector3 / nVector4

```cpp
// Construction
nVector3 v1(1.0f, 2.0f, 3.0f);
nVector3 v2{x, y, z};

// Operations
v1 + v2              // Addition
v1 - v2              // Subtraction
v1 * 2.0f            // Scalar multiplication
v1 / 2.0f            // Scalar division

// Methods
DotProduct(v1,v2)           // Dot product
CrossProduct(v1,v2)         // Cross product (vec3 only)
v1.Length()          // Magnitude
Normalized(v1)       // Unit vector

```

### nMatrix4

```cpp
// Construction
nMatrix4 I = identity();                    // Identity matrix
nMatrix4 m{1, 0, 0, 0, ...};         // From values

// Transformations
Translate(nVector3)                   // Translation matrix
Rotate(angle, axis)                   // Rotation matrix
Scale(nVector3)                       // Scale matrix

// Operations
m1 * m2                               // Matrix multiplication
m * vector                            // Transform vector
a = Transpose(m)                         // Transpose
b = Inverse(m)                           // Inverse (if exists)
```

### nQuaternion

```cpp
// Construction
nQuaternion q(w, x, y, z);           // Direct construction
from_AxisAngle(axis, angle)          // From axis-angle


// Operations
q1 * q2                               // Quaternion multiplication
q= QConjugate(q1)                         // Conjugate
q = QNormalize()                         // Unit quaternion
v = Vec_Rotate(q,vector)                      // Rotate a vector
q = to_nMatrix4(q)                          // Convert to matrix
```




## Building the Library
### As a static library:

```bash
g++ -std=c++20 -c nMath.cpp -o nMath.o
ar rcs libnMath.a nMath.o
g++ -std=c++20 your_code.cpp -L. -lnMath -o your_program
```


## Contributing
[nNewton](https://github.com/mayankbairagi0312/nNewton)


## Contact
[mayankbairagi0312](https://github.com/mayankbairagi0312)