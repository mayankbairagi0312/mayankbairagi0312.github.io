---
title: "portia"
description: "A lightweight, header-based C++ math library."
status: "wip"
order: 2
started: "Feb 2026"
github: "https://github.com/mayankbairagi0312/portia"
tags: ["C++"]
---


# **Fast. Lightweight. Header-based.**  

If you need a straightforward mathematics library for 3D transformations without the bloat of massive game engines, portia is built for you. It relies on modern C++20 features to deliver compile-time calculations and a highly readable API.

*   **Zero Dependencies:** Drop the files into your src folder and start compiling. No complex build systems required.
*   **Compile-Time Ready:** Heavy use of constexpr allows you to bake calculations right into your binary.
*   **Graphics First:** Built-in support for 4x4 Transformation Matrices, Quaternions, and 3D Vectors makes it a perfect companion for OpenGL, Vulkan, or DirectX projects.

## Core Capabilities

### 1. Vectors (pVector2, pVector3, pVector4)
Everything you need for spatial representation and physics calculations. Features include operator overloading for intuitive math, Dot and Cross products, magnitude calculations, and normalization.

### 2. Matrices (pMatrix4)
4x4 matrices specifically tailored for 3D graphics pipelines. Features include fast matrix multiplication, translation, rotation, scaling matrix generation, transposition, and inversion.

### 3. Quaternions (pQuaternion)
Gimbal-lock-free rotations made easy. Features include axis-angle generation, quaternion multiplication, conjugation, normalization, and direct vector rotation.

## Code Showcase

portia is designed to be highly readable. Here is what a standard transformation pipeline looks like:

```cpp
#include "portia.hpp"
using namespace portia;

int main() {
    // 1. Define your initial state
    pVector3 position(1.0f, 2.0f, 3.0f);
    pVector3 velocity(0.5f, 0.0f, -1.0f);

    // 2. Calculate new positions intuitively
    pVector3 new_position = position + (velocity * 2.0f);

    // 3. Generate Gimbal-lock-free rotations using Quaternions
    pQuaternion rotation_quat = from_AxisAngle(pVector3(0, 1, 0), PI / 4.0f);
    pVector3 rotated_pos = Vec_Rotate(rotation_quat, new_position);

    // 4. Build standard graphics transformation matrices
    pMatrix4 translation = Translate(rotated_pos);
    pMatrix4 rotation = to_nMatrix4(rotation_quat);
    
    // 5. Combine for your final MVP (Model-View-Projection) setup
    pMatrix4 final_transform = translation * rotation;

    return 0;
}
```

## Quick Integration

Because portia is designed to be highly portable, adding it to your project takes seconds.

### Build Examples

**GCC or Clang:**
```bash
g++ -std=c++20 main.cpp portia/portia.cpp -o my_app
```

**MSVC:**
```cmd
cl /std:c++20 main.cpp portia/portia.cpp
```

**CMake (Recommended):**
```cmake
add_executable(my_app main.cpp portia/portia.cpp)
target_compile_features(my_app PRIVATE cxx_std_20)
target_include_directories(my_app PRIVATE portia/)
```