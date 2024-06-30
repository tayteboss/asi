#include <map_fragment>

// varying vec3 vPositionW;
// varying vec3 vNormalW;
vec3 normalized = normalize(vNormalW);
vec3 color = diffuseColor.rgb;
vec3 viewDirectionW = normalize(cameraPosition - normalized);
float fresnelTerm = dot(viewDirectionW, normalized);

// color = normalized;

diffuseColor = vec4(color, 1.0);
// diffuseColor = vec4(color, fresnelTerm * 1.0);

// diffuseColor = vec4(color * ((fresnelTerm) * 2.2), 1.0);
