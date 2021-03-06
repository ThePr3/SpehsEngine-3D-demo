
#pragma once

#include "State.h"

#include <glm/vec3.hpp>

#include <vector>


namespace spehs{ class Mesh; class Camera3D; class BatchManager; class SkyBox; }

class DemoState3D : public State
{
public:
	DemoState3D();
	~DemoState3D();

	bool update();
	void render();
	bool input();

private:
	spehs::Camera3D* camera;
	spehs::BatchManager* batchManager;

	spehs::SkyBox* skyBox;
	std::vector<spehs::Mesh*> meshes;
	spehs::Mesh* hero;

	glm::vec3 rotation;
	glm::vec3 position;
};

