#hint:<b>Gold Ratio</b>\nPlots the historical price of the charted security as a function of today's price of gold using the CME E-Mini Gold future as the basis. This study probably has a logic error in it but it is interesting to look at.  

# Make sure you read and understand all disclosures 
# USE AT YOUR OWN RISK!!!
###############################################################
# This source file is Licensed in this source distribution under the GPL v2, June 1991 License 
# The license file must be distributed along with this file in source form for
# full information please see the LICENSE file 
# If the LICENSE file is missing you can download a copy from
# http://www.gnu.org/licenses/gpl-2.0.txt 
# The proper version of the license is GPL V2, June 1991

# File Date 7/29/2011


declare lower;
input b = "/YG";
def test = isNaN(close(b)[-1]) and !isNaN(close(b));
def value = if test then close(b) else double.NaN;
def x = highestAll(value);


plot Data = x*(close/close(b));