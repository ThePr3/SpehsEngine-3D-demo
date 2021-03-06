#version 150

in vec3 fragmentPosition;
in vec4 fragmentColor;
in vec3 fragmentNormal;
in vec2 fragmentUV;

out vec4 color;

uniform sampler2D tex;
uniform vec3 lightPosition;

void main()
{
	vec3 normal = (fragmentNormal);
	vec3 lightPos = vec3(0.0, 1000.0, 0.0);
	vec3 lightDirection = normalize(lightPos - fragmentPosition);
	vec3 viewDirection = normalize(-fragmentPosition);
	float distance = length(lightPos - fragmentPosition);
	float radius = 600.0;
	float attenuation = 1 - pow((distance / radius), 2);
	float shininess = 128.0;
	
	//Ambient
	vec3 ambient = texture(tex, fragmentUV).rgb;
	
	//Diffuse
	vec3 diffuse = vec3(1.0);
	
	//Specular
	vec3 specular = fragmentColor.rgb;
	float spec = 0.0;
	float lambertian = max(dot(lightDirection, normal), 0.0);
	if(lambertian > 0.0)
	{
		vec3 halfwayDirection = normalize(lightDirection + viewDirection);
		float specAngle = max(dot(normal, halfwayDirection), 0.0);
		spec = pow(specAngle, shininess);
	}
	diffuse = diffuse * lambertian;
	specular = specular * spec;
	color = vec4(ambient + attenuation * (diffuse + specular), 1.0);
	
	float viewDistance = 300.0;
	if(length(fragmentPosition - lightPosition) > viewDistance)
	{
		float dist = min((length(fragmentPosition - lightPosition)), 700.0);
		color = color - vec4(0.0008, 0.0006, 0.0006, 1.0) * (dist - viewDistance);
	}
}



