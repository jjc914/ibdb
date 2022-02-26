echo "enter file dir:"
read dir 
echo enter file path desired output:
read path
# For testing 
# echo dir : $dir
# echo Path to txt:  $path


# Create a new file
touch $path.txt

ADD = $(ipfs add -r $dir)
# Read the files in the directory
for file in $dir/*
    do
        echo $file is adding
        # Add the file to the IPFS network
        ipfs add -r $file >> $path.txt
        echo $file added
done

echo "Done"
