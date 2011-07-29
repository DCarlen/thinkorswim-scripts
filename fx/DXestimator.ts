#hint:<b>DX Simulator</b>\nThis study plots as a lower subgraph an estimate for the current price of the Dollar indeX (DX) as defined by theice.com

# Make you read and understand all disclosures 
# USE AT YOUR OWN RISK!!!
###############################################################
# This source file is Licensed in this source distribution under the GPL v2, June 1991 License 
# The license file must be distributed along with this file in source form for
# full information please see the LICENSE file 
# If the LICENSE file is missing you can download a copy from
# http://www.gnu.org/licenses/gpl-2.0.txt 
# The proper version of the license is GPL V2, June 1991

#Formula is available on www.theice.com
#Currency Weights
#     Euro = 57.6% 
#     Canadian Dollar = 9.1%
#     Japanese Yen = 13.6% 
#     Sweden Krona = 4.2%
#     British Pound = 11.9% 
#     Swiss Franc = 3.6%
#     Index Constant = 50.14348112

# Filedate 2/2007

declare lower;
def const = 50.14348112;

def a = 1 / close("EUR/USD");
def b = 1 / close("GBP/USD");
def c = close("USD/SEK");
def d = close("USD/CHF");
def e = close("USD/JPY");
def f = close("USD/CAD");

def usdeur = Power(a, 0.576);
def usdgbp = Power(b, 0.119);
def usdsek = Power(c, 0.042);
def usdchf = Power(d, 0.036);
def usdjpy = Power(e, 0.136);
def usdcad = Power(f, 0.091);

plot DX = const*usdeur*usdgbp*usdsek*usdchf*usdjpy*usdcad;

#DX.hide();
#plot diff = close() - DX;
#plot  money = 5*((close("/DX")-DX)/0.005);
# =FIXED(((E11^- 0.576)*(E17^ -0.136)*(E12^-0.119)*(E7^-0.091)*(E25^- 0.042)*(E8^-0.036))*50.14348112,4)


# * (JPY ^ 0.136) * (GBP ^
#0.119) * (CAN ^ 0.091) * (SEK ^ 0.042) * (CHF^.036) )
#The formula is available on www.theice.com
#Currency Weights
#Euro = 57.6% Canadian Dollar = 9.1%
#Japanese Yen = 13.6% Sweden Krona = 4.2%
#British Pound = 11.9% Swiss Franc = 3.6%