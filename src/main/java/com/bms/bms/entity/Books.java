package com.bms.bms.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotation.Version;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author wx
 * @since 2020-05-24
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@ApiModel(value="Books对象", description="")
public class Books implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "书籍ISBN码唯一,作为主键")
    private String bIsbn;

    @ApiModelProperty(value = "书籍名称")
    private String bName;

    @ApiModelProperty(value = "作者")
    private String bAuthor;

    @ApiModelProperty(value = "出版社")
    private String bPublisher;

    @ApiModelProperty(value = "出版时间")
    private String bPublishTime;

    @ApiModelProperty(value = "书籍简介")
    private String bDescription;

    @ApiModelProperty(value = "书籍总数")
    private Integer bTotal;

    @ApiModelProperty(value = "书籍封面")
    @TableField("b_imageUrl")
    private String bImageurl;

    @ApiModelProperty(value = "逻辑删除0:未删除1删除")
    @TableLogic
    private Boolean isDeleted;

    @ApiModelProperty(value = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private Date gmtCreate;

    @ApiModelProperty(value = "更新时间")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Date gmtModified;


}
