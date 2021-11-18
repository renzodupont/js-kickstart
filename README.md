# js-kickstart

Javascript Library with several utils methods which can be used in any type of project.

## Constants

<dl>
<dt><a href="#wordCount">wordCount</a> ⇒ <code>object</code></dt>
<dd><p>Returns an Object with the number of instances of each word in a given text. Sample return: { &quot;hello&quot; : 2, &quot;world&quot; : 1 }</p>
</dd>
<dt><a href="#getUrlParameter">getUrlParameter</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the value of a paramater present in the URL of the page. If not present, returns null.
This function only works in Front End JS platforms.</p>
</dd>
<dt><a href="#getDate">getDate</a> ⇒ <code>date</code></dt>
<dd><p>Gets a date from a string like &#39;2021-01-01&#39; or another date instance in UTC to avoid issues with Time Zones.</p>
</dd>
<dt><a href="#dayDiff">dayDiff</a> ⇒ <code>number</code></dt>
<dd><p>Gets the difference in days between 2 dates. Parameters can be date instances or strings.</p>
</dd>
<dt><a href="#toUpperCase">toUpperCase</a> ⇒ <code>string</code></dt>
<dd><p>Returns the upper case version of a string. If null or undefined it returns an empty string</p>
</dd>
<dt><a href="#openURLInNewTab">openURLInNewTab</a></dt>
<dd><p>Mimics the functionality of an HTML link and opens a page in a separate browser tab
This function only works in Front End JS platforms.</p>
</dd>
</dl>

<a name="wordCount"></a>

## wordCount ⇒ <code>object</code>

Returns an Object with the number of instances of each word in a given text. Sample return: { "hello" : 2, "world" : 1 }

**Kind**: global constant

| Param | Type                |
| ----- | ------------------- |
| val   | <code>string</code> |

<a name="getUrlParameter"></a>

## getUrlParameter ⇒ <code>string</code> \| <code>null</code>

This function only works in Front End JS platforms. the page. If not present, returns null.

**Kind**: global constant

| Param     | Type                |
| --------- | ------------------- |
| paramName | <code>string</code> |

<a name="getDate"></a>

## getDate ⇒ <code>date</code>

Gets a date from a string like '2021-01-01' or another date instance in UTC to avoid issues with Time Zones.

**Kind**: global constant

| Param | Type                                     |
| ----- | ---------------------------------------- |
| ini   | <code>date</code> \| <code>string</code> |

<a name="dayDiff"></a>

## dayDiff ⇒ <code>number</code>

Gets the difference in days between 2 dates. Parameters can be date instances or strings.

**Kind**: global constant

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| first  | <code>date</code> \| <code>string</code> |
| second | <code>date</code> \| <code>string</code> |

<a name="toUpperCase"></a>

## toUpperCase ⇒ <code>string</code>

Returns the upper case version of a string. If null or undefined it returns an empty string

**Kind**: global constant

| Param | Type                |
| ----- | ------------------- |
| t     | <code>object</code> |

<a name="openURLInNewTab"></a>

## openURLInNewTab

This function only works in Front End JS platforms.a page in a separate browser tab

**Kind**: global constant

| Param | Type                |
| ----- | ------------------- |
| url   | <code>string</code> |
