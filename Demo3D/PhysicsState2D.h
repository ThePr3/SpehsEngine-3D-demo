
#pragma once

#include "State.h"

#include <vector>
#include <memory>


namespace spehs{ class GameObject; class Camera2D; class BatchManager; class Polygon; struct CollisionPoint; class PhysicsWorld2D; class Arrow; }

class PhysicsState2D : public State
{
public:
	PhysicsState2D();
	~PhysicsState2D();

	bool update();
	void render();
	bool input();
	void physicsSimulation();
	void collisionTesting();

private:
	bool gravitySimulation;

	float spawnTimer;

	spehs::Camera2D* camera;
	spehs::BatchManager* batchManager;
	spehs::PhysicsWorld2D* physicsWorld;

	std::vector<spehs::GameObject*> objects;
	spehs::GameObject* userOBJ;
	spehs::GameObject* flyingOBJ;
	spehs::GameObject* floorOBJ;

	std::shared_ptr<spehs::CollisionPoint> collisionPoint;
	std::vector<spehs::Arrow*> collisionNormalVisuals;
	std::vector<spehs::Polygon*> collisionPointVisuals;
};

