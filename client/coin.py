#Import necessary libraries
import hashlib;
import struct;
import datetime;

#Universal functions used by all classes
class algorithms():

	# Hash takes in any STRING and outputs the SHA256 encoded String. 
	# Note .hexdigest() is what keeps the output a string, otherwise the hash would be a Unicode object
	def hash(s):
		#Encode our string and then pass through SHA256, SHA256 takes only unicode
		parse = s.encode();

		# Name Hash as our sha256 algorithm, and convert it to a readable hash through hexdigest.
		hash = hashlib.sha256(parse).hexdigest();

		return hash;


#The BlockChain itself, holds all the transaction blocks!
class BlockChain():
	print("Filler");


#The Block holds a transaction list:
class Block():
	def __init__(self):
		self.hello = 0;


#The BlockChain itself, holds all the transaction blocks!
class Transaction():

	#Intialize our transaction data, get the data from client side!
	def __init__(self):
		self.version = "0000001";
		self.time = ts.timestamp() + "";
		self.sender = "Steve"
		self.reciever = "Dan"
		self.amnt = "1000"
		self.hash = algorithms.hash("" + version + time + sender + reciever + amnt);


	