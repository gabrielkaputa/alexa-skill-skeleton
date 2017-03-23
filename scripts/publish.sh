#!/bin/sh

FUNCTION_NAME="<function name here>"

cd src
zip -r /tmp/$FUNCTION_NAME.zip *
aws lambda update-function-code \
	--profile <aws iam profile name here> \
	--region <aws region here> \
	--function-name $FUNCTION_NAME \
	--zip-file fileb:///tmp/$FUNCTION_NAME.zip