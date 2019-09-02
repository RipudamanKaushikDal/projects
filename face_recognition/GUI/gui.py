import kivy
import encode_faces
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.widget import Widget
from kivy.properties import ObjectProperty
from kivy.uix.checkbox import CheckBox
from kivy.uix.floatlayout import FloatLayout

class MyGrid(Widget):

	def __init__(self,**kwargs):
		super(MyGrid,self).__init__(**kwargs)
		self.ids.check1.bind(active=self.cb_active)


	dataset=ObjectProperty(None)
	encodings=ObjectProperty(None)
	model=ObjectProperty(None)
	label1=ObjectProperty(None)
	label2=ObjectProperty(None)
	check1=ObjectProperty(None)	

	def cb_active(self,cbinstance,value):
		if value:
			self.model=self.label1.text
		else:
			self.model=self.label2.text



	def btn(self):
		encode_faces.encode(self.dataset.text,self.encodings.text,self.model)


class MyApp(App):
	def build(self):
		return MyGrid()



if __name__ == "__main__":
    MyApp().run()
