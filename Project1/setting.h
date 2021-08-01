#include <iostream>
#include <fstream>
#include <stdlib.h>
#include <string>
#include <ctime>

#pragma once

using namespace std;
typedef struct MyStruct
{
	string path;
	string data;
	string log;
	int number;
	int statc;
} data_info;
typedef struct MyStruct2
{
	string title;
	string data;
} git_info;
class File_open {
private:
	data_info d_i;
public:
	File_open(string path) {
		d_i.path = path;
		//d_i.data = time_d();


	}
	void file_open_show();
	void file_open_save();
};
class Git_d
{
public:
	Git_d();
	Git_d(string d);
	~Git_d();
	void git_add();
	void git_commit(string title);
	void git_log();
private:
	git_info g_i;
};
