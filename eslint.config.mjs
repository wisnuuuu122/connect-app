import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: Quiz(),
    );
  }
}

class Project1 extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      backgroundColor: Colors.pink.shade100,
      appBar: AppBar(
        backgroundColor: Colors.blue.shade200,
        foregroundColor: Colors.white,
        title: Text('Aplikasi TIB5J Rara'),
        centerTitle: true,
        actions: [
          IconButton(onPressed: (){}, icon: Icon(Icons.adb), color: Colors.green),
          Padding(padding: EdgeInsets.all(10)),
          IconButton(onPressed: (){}, icon: Icon(Icons.home), color: Colors.grey.shade800),
        ],
        leading: IconButton(onPressed: (){}, icon: Icon(Icons.search), color: Colors.grey.shade800),
      ),
      floatingActionButton: FloatingActionButton(backgroundColor: Colors.blue.shade200, onPressed: (){}, child: Icon(Icons.adb), foregroundColor: Colors.green),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [

            ElevatedButton(
              onPressed: (){},
              child: Text('Tombol Darurat', style: TextStyle(color: Colors.white),),
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200),
                fixedSize: WidgetStatePropertyAll(Size(400, 40)),
              ),),
            Padding(padding: EdgeInsets.all(20)),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: (){}, child: Text('Tombol 1')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 2')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 3')),
              ],
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: (){}, child: Text('Tombol 4')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 5')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 6')),
              ],
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: (){}, child: Text('Tombol 7')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 8')),
                Padding(padding: EdgeInsets.all(30)),
                ElevatedButton(onPressed: (){}, child: Text('Tombol 9')),
              ],
            ),

            Padding(padding: EdgeInsets.all(20)),
            ElevatedButton(onPressed: (){}, child: Text('tes', style: TextStyle(color: Colors.white),),
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200),
                fixedSize: WidgetStatePropertyAll(Size(400, 40)),
              ),
            ),
          ],
        ),
      ),

      bottomNavigationBar: Row(
        children: [
          IconButton(
            onPressed: (){},
            icon: Icon(
              Icons.arrow_back,
              color: Colors.white,
            ),
            style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(
                    Colors.blue.shade200)
            ),
          ),
          Spacer(),
          IconButton(
            onPressed: (){},
            icon: Icon(
              Icons.home,
              color: Colors.white,
            ),
            style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200)),),
          Spacer(),
          IconButton(
            onPressed: (){},
            icon: Icon(Icons.arrow_forward,
              color: Colors.white,
            ),
            style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200)),),
        ],
      ),
    );
  }
}

class Beranda extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(

    );
  }
}

class Quiz extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      backgroundColor: Colors.pink.shade100,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            IconButton(
              onPressed: () {},
              icon: Icon(
                Icons.account_circle,
                color: Colors.white,
                size: 65,
              ),
            ),
            Padding(padding: EdgeInsets.all(5)),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(padding: EdgeInsets.symmetric (horizontal: 20, vertical: 20),
                  child: Text('USERNAME'),),
                SizedBox(
                  width: 200,
                  child: TextField(
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: 'admin',
                    ),
                  ),
                ),
              ],
            ),
            Padding(padding: EdgeInsets.all(5)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
                  child: Text('PASSWORD'),
                ),
                SizedBox(
                  width: 200,
                  child: TextField(
                    obscureText: true,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: 'password',
                    ),
                  ),
                ),
              ],
            ),
            Padding(padding: EdgeInsets.all(10)),
            ElevatedButton(onPressed: (){}, child: Text('LOGIN', style: TextStyle(color: Colors.white),),
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200),
                fixedSize: WidgetStatePropertyAll(Size(100, 40)),
              ),
            ),
            Padding(padding: EdgeInsets.all(10)),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: (){}, child: Text('BACK', style: TextStyle(color: Colors.white),),
                  style: ButtonStyle(
                    backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200),
                    fixedSize: WidgetStatePropertyAll(Size(100, 40)),
                  ),
                ),
                Padding(padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10)),
                ElevatedButton(onPressed: (){}, child: Text('DAFTAR', style: TextStyle(color: Colors.white),),
                  style: ButtonStyle(
                    backgroundColor: WidgetStatePropertyAll(Colors.blue.shade200),
                    fixedSize: WidgetStatePropertyAll(Size(110, 40)),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
