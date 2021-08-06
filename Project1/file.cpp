#include "setting.h"

string time_d() {
	string make_t;
	time_t timer = time(NULL);
	struct tm * t;t = localtime(&timer);
	make_t = t->tm_year + t->tm_mon + t->tm_mday + t->tm_hour + t->tm_min + t->tm_sec + "save";
	return make_t;
}
void File_open::file_open_show(){
	
	ifstream fin;
	fin.open(this->d_i.path); 
	string s;
	
	if (!fin)
	{
		cout << "do not open file";
	}
	fin >> s;
	cout << s << "입니다." << endl;
	fin.close();
}
void File_open::file_open_save() {
	ofstream fout(this->d_i.path);
	string s;
	if (!fout)
	{
		cout << "do not open file";
	}
	s = time_d();
	fout << s;
	d_i.data = s;
	fout.close();
}