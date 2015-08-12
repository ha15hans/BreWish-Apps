<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="UTF-8" indent="no"/>
	
	<xsl:template match="/">
		<xsl:apply-templates select="EventList"/>
	</xsl:template>
	
	<xsl:template match="EventList">
		<xsl:apply-template select="Event"/>
	</xsl:template>
	
	<xsl:template match="Event">
		<div class="ui-btn" id="{@id}" onclick="loadEvent({@id});">
			<div class="ui-grid-b">
				<div class="ui-block-a" style="width:20%;">
					<img style="border-radius:5px;width:100%;">
						<xsl:attribute name="src">
							<xsl:variable name="EventImage" select="normalize-space(EventImage)"/>
							<xsl:choose>
								<xsl:when test="$EventImage != ''">
									<xsl:value-of select="$EventImage"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="'img/eventPlaceholder.png'"/>
								</xsl:otherwise>
							</xsl:choose>
						</xsl:attribute>
					</img>
				</div>
				<div class="ui-block-b" style="font-size:0.6em;width:60%;">
					<div><xsl:value-of select="EventName"/></div>
					<div style="padding:15px 0px 15px 15px;">
						<span style="float:left;"><xsl:value-of select="EventLocation"/></span>
						<span style="float:right"><xsl:value-of select="EventTime"/></span>
					</div>
				</div>
				<div class="ui-block-c" style="width:20%;" onclick="joinEvent({@id});">
					<div class="ui-nodisc-icon" style="float:right;">
						<div class="ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext"/>
					</div>
				</div>
			</div>
		</div>
	</xsl:template>
</xsl:stylesheet>