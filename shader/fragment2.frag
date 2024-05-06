precision mediump float;

varying vec3 vNormal;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform vec3 color5;

uniform float position1;
uniform float position2;
uniform float position3;
uniform float position4;
uniform float position5;

void main() {
    vec3 color = vNormal * 0.5 + 0.5;

    if (color.x <= position2) {
        color = mix(color1, color2, smoothstep(position1, position2, color.x));
    } else if (color.x <= position3) {
        color = mix(color2, color3, smoothstep(position2, position3, color.x));
    } else if (color.x <= position4) {
        color = mix(color3, color4, smoothstep(position3, position4, color.x));
    } else{
        color = mix(color4, color5, smoothstep(position4, position5, color.x));
    }

    gl_FragColor = vec4(color, 0.7);
}
