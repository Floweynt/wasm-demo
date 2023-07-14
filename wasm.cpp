// external print function for printing integers
extern "C" void print_int(int data);
extern "C" void write_stdout(const char* data, int len);

static int strlen(const char* data)
{
    int n = 0;
    while(*data++)
        n++;
    return n;
}

static void print_str(const char* data)
{
    write_stdout(data, strlen(data));
}

extern "C" int sum_array(int* data, int len)
{
    int result = 0;
    for(int i = 0; i < len; i++)
        result += data[i];
    return result;
}

extern "C" void print_add_one(int n)
{
    print_int(n + 1);
}

extern "C" void hello_world()
{
    print_str("Hello, world!");
}
