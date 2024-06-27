#include <begin_vertex>

vPositionW = vec3(vec4(position, 1.0) * modelMatrix);
// vNormalW = normalize(vec3(vec4(normal, 0.0) * modelMatrix));
vNormalW = (transpose(inverse(modelMatrix)) * vec4(normal, 0.0)).xyz;
vUvs = uv;