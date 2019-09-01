import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget
from kivy.properties import ObjectProperty
from kivy.uix.checkbox import CheckBox

class MyGrid(Widget):
	def btn(self):
		print("done")


class MyApp(App):
	def build(self):
		return MyGrid()



if __name__ == "__main__":
    MyApp().run()
