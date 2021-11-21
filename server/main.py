#Testing out the hashing function!

#Import necessary libraries
import hashlib;
import struct;
import datetime;

# STEP 1, Create a Hash Function and necassry tools.

def hashMe(s):
	#Encode our string and then pass through SHA256, SHA256 takes only unicode
	parse = s.encode();

	# Name Hash as our sha256 algorithm, and convert it to a readable hash through hexdigest.
	hash = hashlib.sha256(parse).hexdigest();

	#Now print it
	#print(hash);

	return hash;


# Working on
def littleEdianConvert (s):
	ToConvert = "0x" + s;
	Integer = int(ToConvert, 0);
	BigEdian = struct.pack('>I', Integer);
	print(int(ToConvert, 0));
	print(struct.pack('>I', Integer))

# STEP 2, Create a Merkle Tree and a Merkle Root. Takes Transaction objects.

def calcDoubleHash(transaction_1, transaction_2):
	str = transaction_1 + transaction_2;
	return hashMe(str);


def findMerkleRoot(list):
	x = 0;
	empty = [];
	if (len(list) == 1):
		return list;

	if ((len(list) % 2) != 0):
		list.append(list[len(list) - 1]);


	while x <= (len(list) - 2):
		empty.append(calcDoubleHash(list[x], list[x + 1]));
		x += 2;

	list = empty;
	empty = [];
	print(list);

	Storage = findMerkleRoot(list);

	return Storage;

# 00000010 is the version
# a57b08a480b822a0a572b993391c292ede593bf8000b406675b180bbb16260fa ~ Previous block
# 7c192e87ba4cb6a958ddf35856a4af0368004a239ab87cf0b737320d43141f06 ~ Merkle Tree Root
# 1636868507 ~ Timestamp of block
# ea071017 ~ Network difficulty
# 9052dc97 ~ Nonce
# Used Merkle Root ~ MerkleRoot
# Each FF is a byte number, there is 32 bytes for a SHA256 algorithm!

def HashMining():
	nonce = 0;
	#HeaderMessage = "00000010" + "a57b08a480b822a0a572b993391c292ede593bf8000b406675b180bbb16260fa" + "7c192e87ba4cb6a958ddf35856a4af0368004a239ab87cf0b737320d43141f06 " + "1636868507" + "000001";
	HeaderMessage = "aksdhasuihdhasaoiajsdoiasjdoaojdasijdjoasdjjahdaoshd";
	Target = "0x00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";

	Hashed = False;
	limit = 1000000;
	curr = 0;

	#x = list()
	#y = list()

	while Hashed == False:
			Message = "Will" + str(nonce);

			answer = str(hashMe(Message));

			print("");
			print("START");
			print("The hash of the header is: ");
			print(int(answer, 16));
			print("");
			print("The Target is: ");
			print(int(Target, 16));
			print("END");
			print("");

			nonce = nonce + 1;
			curr = 1 + curr;

			if int(answer, 16) < int(Target, 16):
				Hashed = True;
				print("Hash found!");
				print(curr);
				print(nonce);

				break;

			if curr > limit:
				print(curr);
				print(nonce);
				print("Hash NOT found!");
				break;
			
			print(curr);
			print(nonce);
			
			
			
			

HashMining();
#ts = datetime.datetime.now();
#End = ts.timestamp();
#print();
#print(End);

#m = hashMe("MerkleTree");
#a = hashMe("Yolo");
#s = hashMe("MerkleTree");
#h = hashMe("Yolo");

#Me = calcDoubleHash(m, a);
#You = calcDoubleHash(s, h)

#We = calcDoubleHash(Me, You)

#print(We);



# TESTING AREA
'''
info = ["asdbasubd","a","asdsaubd","asdbasubd","asdbasubd","aubd","asdgujhsubd","asdbfghbd","asdasddubd","asdbaasdd","asdbaasdbd","asbd","asdbasd","aef",];


def test1(list):
	output = [];
	for x in info:
		output.append(hashMe(x));

	#print(output);
	return output;


List_of_Trans = test1(info);

# We Group Our 2's like in a Merkle Tree, First we hash each transaction
a = hashMe(List_of_Trans[0]);
b = hashMe(List_of_Trans[1]);

c = hashMe(List_of_Trans[2]);
d = hashMe(List_of_Trans[3]);

e = hashMe(List_of_Trans[4]);
f = hashMe(List_of_Trans[5]);

g = hashMe(List_of_Trans[6]);
h = hashMe(List_of_Trans[7]);

i = hashMe(List_of_Trans[8]);
j = hashMe(List_of_Trans[9]);

k = hashMe(List_of_Trans[10]);
l = hashMe(List_of_Trans[11]);

m = hashMe(List_of_Trans[12]);
n = hashMe(List_of_Trans[13]);

# Group More
ab = hashMe(a+b);

cd = hashMe(c+d);

ef = hashMe(e+f);

gh = hashMe(g+h);

ij = hashMe(i+j);

kl = hashMe(k+l);

mn = hashMe(m+n);

print();
print();
print();
print("ACTUAL LIST");
print('[' + ab + ']' + '[' + cd + ']' + '[' + ef + ']' + '[' + gh + ']' + '[' + ij + ']' + '[' + kl + ']' + '[' + mn + ']');
print();
print();
print();
print("END");


# Group More
abcd = hashMe(ab + cd);
efgh = hashMe(ef + gh);
ijkl = hashMe(ij + kl);
mnmn = hashMe(mn + mn);


# Group Me
abcdefgh = hashMe(abcd + efgh);
ijklmnmn = hashMe(ijkl + mnmn);

# Final Group
abcdefghijklmnmn = hashMe(abcdefgh + ijklmnmn);


f = findMerkleRoot([a,b,c,d,e,f,g,h,i,j,k,l,m,n]);
final = f[0];
regular = abcdefghijklmnmn;


print();
print();

if (regular == final):
	print("True");
else:
	print("False");

print();
print();
print(final);

'''
