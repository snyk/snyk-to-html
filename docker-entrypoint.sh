#!/bin/ash

# snykt-to-html is used to generate HTML reports from Snyk JSON output
#
# Packaging up as a Docker images make reuse easier, especially in
# modern CI pipelines
#
# snyk-to-html by default always outputs to a file but it's often useful
# to output to stdout so this images changes the behaviour to support
# the widest possible usage
#
# If no options passed
# Read from stdin, output to stdout
# if -i
# Read from file on disk, output to stdout
# if -o
# Read from stdin, output to disk
# If -i and -o
# Read from file and output to file

if ! [ -x "$(command -v snyk-to-html)" ]; then
  echo "Error: snyk-to-html is not installed." >&2
  exit 1
fi

while getopts ":i:o:" opt; do
  case ${opt} in
    i)
      input=${OPTARG}
      ;;
    o)
      output=${OPTARG}
      ;;
    \?)
      echo "Invalid option: -${OPTARG}" >&2
      exit 1
      ;;
    :)
      echo "Option -${OPTARG} requires an argument." >&2
      exit 1
      ;;
  esac
done

if [ -z "${output}" ]
then
    if [ -z "${input}" ]
    then
        snyk-to-html -o snyk.html > /dev/null
        cat snyk.html
    else
        snyk-to-html -i ${input} -o snyk.html > /dev/null
        cat snyk.html
    fi
else
    if [ -z "${input}" ]
    then
        snyk-to-html -o ${output}
    else
        snyk-to-html -i ${input} -o ${output}
    fi
fi
