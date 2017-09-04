
filename = 'lincoln.txt'

f = File.new(filename, "r")
text = f.read
words = text.split(/[' ', '.', ',', '-', ';']/)

counter = 0
word_count = 0
target = 'liberty'

for word in words
	word_count += 1
	if word == 'liberty'
		counter += 1
	end
end

puts "#{target} found #{counter} times"
puts "word count: #{word_count}"