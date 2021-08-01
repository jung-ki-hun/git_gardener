#include "setting.h"

Git_d::Git_d(string d) {
	this->g_i.title = d + " commit";
	this->g_i.data = 'abc';
}
Git_d::~Git_d() {
}
void Git_d::git_add() {
	system("git add -A");
}
void Git_d::git_commit(string title) {
	string s = "git commit -am \"" + title + this->g_i.title + "\"";
	char *ch1;
	strcpy(ch1, s.c_str());
	system(ch1);
}
void Git_d::git_log() {
	system("git log --oneline");
}
void Git_d::git_push(string branch) {
	string s = "git push origin " + branch;
	char *ch1;
	strcpy(ch1, s.c_str());
	system(ch1);
}