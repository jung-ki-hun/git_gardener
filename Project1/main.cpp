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

	}//������ġ �ޱ�
	File_open file_d(path);
	file_d.file_open_show();//����
	file_d.file_open_save();//����

	system("git init");
	return 0;
}