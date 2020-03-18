#!/usr/bin/env python
# coding: utf-8

# In[97]:


import pandas as pd
import os 
import csv
import json
import numpy as np
import seaborn as sns
from pandas import DataFrame
import matplotlib.pyplot as plt
import requests
from pprint import pprint 


# In[99]:



url = 'https://www.alphavantage.co/query?function=SECTOR&apikey=FRJYEESDLZYG9DMY'
params = {
  'function': 'SECTOR',
}
response = requests.request('GET', url, params=params)
response.json()


# In[100]:


# Print the response object to the console
print(requests.get(url))


# In[29]:


# Retrieving data and converting it into JSON
print(requests.get(url).json())


# In[102]:


# Pretty Print the output of the JSON
response = requests.get(url).json()
print(json.dumps(response, indent=4, sort_keys=True))


# In[123]:


data = response
pprint(data)


# In[113]:


df = pd.read_json(url)
df.head()


# In[ ]:





# In[118]:


df[[df.columns[i] for i in range(len(df.columns)) if i != 12]]
print(df)
# Save as a csv 
#does not return sector column? 
df.to_csv("C:\\Test\\sector_data.csv", encoding="utf-8", index=False)


# In[ ]:





# In[119]:


#creating a heatmap to automatically update
Index= ['Utilities', 
        'Consumer Staples', 
        'Real Estate',
        'Information Technology',
        'Materials',
        'Health Care',
        'Financials',
        'Industrials',
        'Consumer Discretionary',
        'Communication Services',
        'Energy']
cols = ['Rank A: Real-Time Performance',
       'Rank B: 1 Day Performance',
       'Rank E: 3 Month Performance']
df = DataFrame(abs(np.random.randn(11,3)), index = Index, columns = cols)
df.style.background_gradient(cmap='RdYlGn')


# In[ ]:





# In[ ]:





# In[ ]:




