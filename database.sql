
--database name: prime_app--
--create tables--
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL
);


CREATE TABLE "mood" (
	"id" SERIAL PRIMARY KEY,
	"moodname" VARCHAR(50) NOT NULL,
	"imageurl" VARCHAR(2000) NOT NULL
);


CREATE TABLE "reflection" (
	"id" SERIAL PRIMARY KEY,
	"when" TIMESTAMP,
	"user_id" INT REFERENCES "user",
	"mood_id" INT REFERENCES "mood"
);

CREATE TABLE "prompt" (
	"id" SERIAL PRIMARY KEY,
	"text" VARCHAR(50) NOT NULL
);

CREATE TABLE "response" (
	"id" SERIAL PRIMARY KEY,
	"reflection_id" INT REFERENCES "reflection",
	"prompt_id" INT REFERENCES "prompt",
	"response" BOOLEAN
);

--join tables--
SELECT "user".username, "reflection".id AS "reflection_id", "mood".moodname, "prompt".text, "response".response FROM "user"
JOIN "reflection" ON "user".id = "reflection".user_id
JOIN "mood" ON "mood".id = "reflection".mood_id
JOIN "response" ON "response".reflection_id = "reflection".id
JOIN "prompt" ON "response".prompt_id = "prompt".id
GROUP BY "user".username, "reflection".id, "mood".moodname, "prompt".text, "response".response
