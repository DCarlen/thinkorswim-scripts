#hint:<b>FX Spread</b>\nThis study plots the bid/ask spread for the FX pair on the current chart. Please remember when comparing the commission spreads to the non-commission spreads that commission spreads have a tick size one-tenth the size of the non-commission so a spread of 1 on EUR/USD is equivalent to a spread of 10 on EUR/USD# 
declare lower;

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

plot Data = ((close(pricetype="ASK")-close(pricetype="BID"))/tickSize());

rec num = compoundValue(1, num[1]+Data, Data);
rec denom = compoundValue(1, denom[1]+1, 1);
plot avg = num/denom;

plot Zero=0;
plot Min = Lowestall(data);
plot Max = HighestAll(data);

max.setstyle(curve.short_dash);
min.setstyle(curve.short_dash);

DefineGlobalColor("Up", color.green);
DefineGlobalColor("Dn", color.blue);
DefineGlobalColor("Up2", color.orange);
DefineGlobalColor("Dn2", color.red);
AddCloud(data, max, globalColor("Up"), globalColor("Dn"));
AddCloud(data, min, globalColor("Up2"), globalColor("Dn2"));

# It's dark in here and you are likely to be eaten by a grue.
# Your sword is glowing very brightly.
