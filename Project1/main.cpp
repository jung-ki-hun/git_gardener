#include "setting.h"

//#include <stdlib.h>

int main(int argc, char* argv[]) {
	string path;
	if (argv[1] == NULL)
	{
		return 0;
	}
	else
	{
		path = argv[1];

	}//파일위치 받기
	File_open file_d(path);
	file_d.file_open_show();//열기
	file_d.file_open_save();//저장

	system("git init");
	return 0;
}